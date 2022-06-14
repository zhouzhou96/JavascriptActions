env=/appl/idf/script/ODC/actions-runner/_work/ODC-GithubAction/ODC-GithubAction/.github/script/env_reset.yaml


registry_url=$(cat $env | sed 's/,/\n/g' | grep "registry_url" | sed 's/=/\n/g' | sed '1d' | sed 's/}//g')
openshift_server=$(cat $env | sed 's/,/\n/g' | grep "openshift_server" | sed 's/=/\n/g' | sed '1d' | sed 's/}//g')
jar_name=$(cat $env | sed 's/,/\n/g' | grep "jar_name" | sed 's/=/\n/g' | sed '1d' | sed 's/}//g')
jar_version=$(cat $env | sed 's/,/\n/g' | grep "jar_version" | sed 's/=/\n/g' | sed '1d' | sed 's/}//g')
jar_adderss=$(cat $env | sed 's/,/\n/g' | grep "jar_adderss" | sed 's/=/\n/g' | sed '1d' | sed 's/}//g')
runner_repository=$(cat $env | sed 's/,/\n/g' | grep "runner_repository" | sed 's/=/\n/g' | sed '1d' | sed 's/}//g')


echo "::set-output name=registry_url::$(echo $registry_url)"
echo "::set-output name=openshift_server::$(echo $openshift_server)"
echo "::set-output name=jar_name::$(echo $jar_name)"
echo "::set-output name=jar_version::$(echo $jar_version)"
echo "::set-output name=jar_adderss::$(echo $jar_adderss)"
echo "::set-output name=runner_repository::$(echo $runner_repository)"
